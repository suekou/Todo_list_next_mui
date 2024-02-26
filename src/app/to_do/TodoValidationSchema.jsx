import * as yup from "yup";

const TodoValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required("nameは必須です。")
    .max(10, "10文字以下で入力してください。"),
  description: yup
    .string()
    .required("descriptionは必須です。")
    .max(50, "50文字以下で入力してください。"),
});

export default TodoValidationSchema;
