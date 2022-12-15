import { defineStore } from "pinia";
import { db } from "@/db";
import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";
import {
  setDoc,
  doc,
  getDocs,
  collection,
  serverTimestamp,
  // addDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import emailjs from "emailjs-com";

export const useSiteState = defineStore({
  id: "site-state",
  state: () => ({
    testimonials: [],
    works: [],
    messages: [],
  }),
  actions: {
    async getTesimonials() {
      const querySnapshot = await getDocs(collection(db, "testimonials"));
      this.testimonials = [];
      console.log("from testimonials");
      querySnapshot.forEach((doc) => {
        const dataObject = doc.data();
        console.log(dataObject);
        // Actions can mutate state in pinia
        // mutate projects
        this.testimonials.push({ ...dataObject });
        console.log(this.testimonials);
      });
    },
    // add Testimonials
    async addTestimonial({ name, email, testimonial }) {
      this.isProcessing = true;
      try {
        await setDoc(doc(db, "testimonials", name), {
          name: name,
          location: email,
          testimonial: testimonial,
        });
        this.isProcessing = false;
        this.emailSent = true;
        const toast = useToast();
        toast("Testimonial Added");
      } catch (error) {
        this.isProcessing = false;
        this.emailNotSent = true;
        if (error) {
          console.log(error);
        }
        const toast = useToast();
        toast("Testimonial Not Added");
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
