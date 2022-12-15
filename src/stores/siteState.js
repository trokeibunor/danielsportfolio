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
  addDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import emailjs from "emailjs-com";

export const useSiteState = defineStore({
  id: "site-state",
  state: () => ({
    testimonials: [],
    works: [],
    messages: [],
    mailData: {
      service_ID: "service_1x2oa49",
      template_ID: "template_b3wiotr",
      userID: "GVwnRMbrkBrh1l_Kd",
    },
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
    async sendMail(name, subject, message, email, location, target) {
      this.isProcessing = true;
      if (subject != "" && message != "" && email != "") {
        try {
          // Send to mail
          emailjs.sendForm(
            this.mailData.service_ID,
            this.mailData.template_ID,
            target,
            this.mailData.userID,
            {
              from_name: name,
              subject: subject,
              message: message,
              reply_to: email,
              sender_location: location,
              to_name: "Daniel",
            }
          );
          // save to database
          await addDoc(collection(db, "Messages"), {
            from_name: name,
            subject: subject,
            message: message,
            reply_to: email,
            sentAt: serverTimestamp(),
          });
          const toast = useToast();
          toast.success("Email sent successfully");
          this.emailSent = true;
          // save to database
        } catch (error) {
          this.isProcessing = false;
          // this.emailNotSent = true;
          const toast = useToast();
          toast.error("email not sent please try again");
          console.log(error);
        }
      } else {
        this.isProcessing = false;
        this.emptyForm = true;
      }
    },
    // get works
    async getWorks() {
      const querySnapshot = await getDocs(collection(db, "works"));
      this.works = [];
      querySnapshot.forEach((doc) => {
        const dataObject = doc.data();
        // Actions can mutate state in pinia
        // mutate projects
        this.works.push({ ...dataObject });
        console.log(this.works);
      });
    },
  },
});
