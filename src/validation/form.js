import * as yup from 'yup';

export const formSchema = yup.object().shape({
    email:yup.string().email("Geçersiz e-mail adresi").required("E-mail adresini gerekli"),
    username:yup.string().required("İsminiz gerekli"),
    subject:yup.string().required("Bu alan gerekli").min(5,"En az 5 karakterli bir konu girin"),
    message:yup.string().min(15, "En az 15 karakterli bir mesaj girin").required("Bu alan gerekli")
})