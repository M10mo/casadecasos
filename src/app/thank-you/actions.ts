'use server'

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs'

export const getPaymentStatus = async () => {
    const {getUser} = getKindeServerSession()
    const user = await getUser() 
    if(!user?.id || !user.email) {
        throw new Error('You need to be logged in to view this page.')
    }

    

}