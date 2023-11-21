import { Type } from '@sinclair/typebox';
import { t } from 'elysia'

const InsertUserSchema = Type.Object({
    user: Type.Object({
        name: Type.String(),
        email: Type.String()  
    })
});

const InsertUserSchemaElysia = t.Object({
    user: t.Object({
        name: t.String(),
        email: t.String()
    })
})

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

const ReturnedAuthorizationUserSchema = Type.Object({
    authorization: Type.Any(), 
})

export {
    InsertUserSchema,
    ReturnedUserSchema,
    ReturnedArrayUserSchema,
    InsertUserSchemaElysia,
    ReturnedAuthorizationUserSchema,
}