import { useState, useEffect } from 'react';
import { supabase } from '../client.supabase';

/**
 * @param {number} channelId the currently selected Channel
 */
export const useStore = (props: any) => {
  const [channels, setChannels] = useState<any[]>([])
  const [messages, setMessages] = useState<any[]>([])
  const [users] = useState(new Map())
  const [newMessage, handleNewMessage] = useState<any>(null)
  const [newChannel, handleNewChannel] = useState(null)
  const [newOrUpdatedUser, handleNewOrUpdatedUser] = useState<any>(null)

  // Load initial data and set up listeners
  useEffect(() => {
    // Get Channels
    fetchChannels(setChannels)
    // Listen for new messages
    const messageListener = supabase
      .channel('messages')
      .on('INSERT', (payload: any) => handleNewMessage(payload.new))
      .subscribe()
    // Listen for changes to our users
    const userListener = supabase
      .channel('users')
      .on('*', (payload: any) => handleNewOrUpdatedUser(payload.new))
      .subscribe()
    // Listen for new channels
    const channelListener = supabase
      .channel('channels')
      .on('INSERT', (payload: any) => handleNewChannel(payload.new))
      .subscribe()
    // Cleanup on unmount
    return () => {
      messageListener.unsubscribe()
      userListener.unsubscribe()
      channelListener.unsubscribe()
    }
  }, [])

  // Update when the route changes
  useEffect(() => {
    if (props?.channelId > 0) {
      fetchMessages(props.channelId, (messages: any) => {
        messages?.forEach((x: any) => users.set(x.user_id, x.author))
        setMessages(messages)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.channelId])

  // New message recieved channel Postgres
  useEffect(() => {
    if (newMessage && newMessage.channel_id === Number(props.channelId)) {
      const handleAsync = async () => {
        let authorId = newMessage.user_id
        if (!users.get(authorId)) await fetchUser(authorId, (user: any) => handleNewOrUpdatedUser(user))
        setMessages(messages.concat(newMessage))
      }
      handleAsync()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newMessage])

  // New channel recieved channel Postgres
  useEffect(() => {
    if (newChannel) setChannels(channels.concat(newChannel))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newChannel])

  // New or updated user recieved channel Postgres
  useEffect(() => {
    if (newOrUpdatedUser) users.set(newOrUpdatedUser.id, newOrUpdatedUser)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newOrUpdatedUser])
  
  return {
    // We can export computed values here to map the authors to each message
    messages: messages && messages.map((x) => ({ ...x, author: users.get(x.user_id) })),
    channels: channels && channels.sort((a, b) => a.slug.localeCompare(b.slug)),
    users,
  }
}

/**
 * Fetch all channels
 * @param {function} setState Optionally pass in a hook or callback to set the state
 */
export const fetchChannels = async (setState: any) => {
  try {
    let { body }: any = await supabase.from('channels').select('*')
    if (setState) setState(body)
    return body
  } catch (error) {
    console.log('error', error)
  }
}

/**
 * Fetch a single user
 * @param {number} userId
 * @param {function} setState Optionally pass in a hook or callback to set the state
 */
export const fetchUser = async (userId: any, setState:  (user: any) => void) => {
  try {
    let { body } = await supabase.from('users').eq('id', userId).select(`*`)
    let user = body[0]
    if (setState) setState(user)
    return user
  } catch (error) {
    console.log('error', error)
  }
}

/**
 * Fetch all messages and their authors
 * @param {number} channelId
 * @param {function} setState Optionally pass in a hook or callback to set the state
 */
export const fetchMessages = async (channelId: string, setState: (messages: any) => void) => {
  try {
    let { body } = await supabase
      .from('messages')
      .select(`*, author:user_id(*)`)
      .eq('channel_id', channelId)
      .order('inserted_at', true)
    if (setState) setState(body)
    return body
  } catch (error) {
    console.log('error', error)
  }
}

/**
 * Insert a new channel into the DB
 * @param {string} slug The channel name
 */
export const addChannel = async (slug: any) => {
  try {
    let { body } = await supabase.from('channels').insert([{ slug }])
    return body
  } catch (error) {
    console.log('error', error)
  }
}

/**
 * Insert a new message into the DB
 * @param {string} message The message text
 * @param {number} channel_id
 * @param {number} user_id The author
 */
export const addMessage = async (message: any, channel_id: any, user_id: any) => {
  try {
    let { body } = await supabase.from('messages').insert([{ message, channel_id, user_id }])
    return body
  } catch (error) {
    console.log('error', error)
  }
}
