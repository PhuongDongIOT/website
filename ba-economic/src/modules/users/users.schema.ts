import { Type, Static } from '@sinclair/typebox';

const InsertUserSchema = Type.Object({
    user: Type.Object({
        name: Type.String(),
        email: Type.String()  
    })
});

const ReturnedUserSchema = Type.Object({
    user: Type.Object({
        name: Type.String(),
        email: Type.String()  
    })
});

const ReturnedArrayUserSchema = Type.Array(
    Type.Object({
        name: Type.String(),
        email: Type.String()  
    })
)

export {
    InsertUserSchema,
    ReturnedUserSchema,
    ReturnedArrayUserSchema,
}