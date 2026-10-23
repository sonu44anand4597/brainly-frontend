import {Button} from "./components/button"
import {ShareIcon} from "./icons/shareIcon"
import {PlusIcon} from "./icons/PlusIcon"



function App() {

  return (

    <div >
    <Button variant="primary" text = "Add content" startIcon={<PlusIcon/>}></Button>
        <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>}></Button>

    </div>

  )
}

export default App
