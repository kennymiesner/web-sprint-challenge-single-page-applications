// Here goes the schema for the form
import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(3, 'Name must be at least 2 characters'),
})

export default formSchema