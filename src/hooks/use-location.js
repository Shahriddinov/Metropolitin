import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

export const useLocation = () => {
    const { token } = useSelector(state => state.user);

    const navigate = useNavigate()

    useEffect(()=> {
        if(token){
            navigate('/',{replace:true})
        }
    },[token])
 
}
