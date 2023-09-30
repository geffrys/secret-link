
import { useParams } from 'react-router-dom'
import Popup from '../components/PopUpAddPeople.jsx'
import AddTravelerForm from '../components/AddTravelerForm.jsx'

const TakingPlan = () => {
    const { id } = useParams();

    return (

        <>
            <Popup isOpen={true}>
                <AddTravelerForm />
            </Popup>
        
        </>
    )
}

export default TakingPlan