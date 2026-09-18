const API_URL = 'https://apibox.vercel.app/V122nRG1xIpziJawmrUErEB5hkMeEvu1/api/students'

export const fetchStudents = async() => {
  const response = await fetch(API_URL)
           
      return await response.json()
    }