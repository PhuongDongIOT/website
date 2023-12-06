'use client'

import { useEffect, useState, useTransition } from "react";
import { useForm, Resolver } from "react-hook-form"

type FormValues = {
    firstName: string
    userId: string
    romId: string
}

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.firstName ? values : {},
        errors: !values.firstName
            ? {
                firstName: {
                    type: "required",
                    message: "This is required.",
                },
            }
            : {},
    }
}

export default () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver })

    const [userName, setUserName] = useState<string>('');
    const [userId, setUserId] = useState<string>('');
    const [romId, setRomId] = useState<string>('');
    const [isPending, startTransition] = useTransition();


    const onSubmit = handleSubmit((data: FormValues) => {
        startTransition(() => {
            const { firstName, userId, romId } = data;
            setUserName(firstName);
            setUserId(userId);
            setRomId(romId);            
        })
    })

    if(isPending) {
        return <b className="pending">Loading...</b>;
    }
    
    return (
        <div className="App">
            {!userId && <form onSubmit={onSubmit}>
                <input {...register("firstName")} placeholder="Bill" />
                {errors?.firstName && <p>{errors.firstName.message}</p>}

                <input {...register("userId")} placeholder="Luo" />
                <input {...register("romId")} placeholder="Luo" />

                <input type="submit" />
            </form>}

            {userId && <PostComponent userId={userId} romId={romId} userName={userName} />}
        </div>
    );
};

interface TypePostComponent {
    userName: string;
    userId: string;
    romId: string;
}

type FormValuesMesage = {
    chatMessage: string
}

type TypeUserMessage = {
    user: string,
    message: string
}

const PostComponent = ({ userName, userId, romId }: TypePostComponent) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValuesMesage>({})
    const [chatMessages, setChatMessages] = useState<TypeUserMessage[]>([])

    const socket = new WebSocket(
        `ws://localhost:4001/ws/${romId}/${userId}`
    )

    useEffect(() => {

        socket.addEventListener('open', function (event: any) {
            console.log('open')
        })
    
        socket.addEventListener('message', function (event: any) {
            const { user, message } = JSON.parse(event.data)
            if (message) {
                if(message.user !== userName) {
                    if(message.user) {
                        setChatMessages((prevMessage: TypeUserMessage[]) => [...prevMessage, message])
                    }
                }
            }
        })
    }, [])

    const onSubmit = handleSubmit((data: FormValuesMesage) => {
        const { chatMessage } = data;
        try {
            const detailMesage: TypeUserMessage = {
                user: userName,
                message: chatMessage
            }
            setChatMessages((prevMessage: TypeUserMessage[]) => [...prevMessage, detailMesage]);
            socket.send(
                JSON.stringify({
                    message: detailMesage
                })
            )
        } catch (errors: any) {
            console.log(errors)
        }
    })

    return (
        <div className="App">
            <h1>{userName}</h1>
            <form onSubmit={onSubmit}>
                <input {...register("chatMessage")} placeholder="Luo" />
                <input type="submit" />
            </form>

            {
                chatMessages && chatMessages.map((message: TypeUserMessage) => (
                    <>
                        <p>{ message.user }</p>
                        <p>{ message.message }</p>
                    </>
                ))
            }
        </div>
    )
}