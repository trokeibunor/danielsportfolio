import { defineStore } from "pinia";
import { db } from "@/db";
import {
  setDoc,
  doc,
  //   getDocs,
  //   collection,
  serverTimestamp,
  //   addDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import emailjs from "emailjs-com";

export const useSiteState = defineStore({
  id: "site-state",
  state: () => ({
    testimonials: [],
    works: [],
  }),
  actions: {
    // add Testimonials
    async addTestimonial({ name, email, testimonial }) {
      this.isProcessing = true;
      try {
        await setDoc(doc(db, "testimonials", name), {
          Name: name,
          email: email,
          testimonial: testimonial,
          createdAt: serverTimestamp(),
        });
        this.isProcessing = false;
        this.emailSent = true;
      } catch (error) {
        this.isProcessing = false;
        this.emailNotSent = true;
        if (error) {
          console.log(error);
        }
      }
    },
    async addWorks({ name, link, category, img, shortDesc }) {
      this.isProcessing = true;
      const storage = getStorage();
      const storageRef = ref(storage, name);
      const uploadArticle = await uploadBytes(storageRef, img);
      const downloadUrl = await getDownloadURL(uploadArticle.ref);
      try {
        await setDoc(doc(db, "works", name), {
          Name: name,
          Link: link,
          category: category,
          ImgLink: downloadUrl,
          shortDesc,
          createdAt: serverTimestamp(),
        });
        alert("added to database");
        this.isProcessing = false;
        this.emailSent = true;
      } catch (error) {
        this.isProcessing = false;
        this.emailNotSent = true;
        if (error) {
          console.log(error);
          this.isProcessing = false;
          this.emailNotSent = true;
        }
      }
    },
  },
});
