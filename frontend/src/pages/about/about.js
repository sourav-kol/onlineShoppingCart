import { Top } from "../../layouts/top-jumbo"
import { useRef} from "react"

export function About() {
    //using state
    // let [clName, setClName] = useState("animate-div")
    // const toggleClass = (e) => {
    //     setClName(`${clName} animate-click`)
    // }

    //usinf refs
    let clName = useRef()
    const toggleClass = (e) => {
        clName.current.classList.toggle('animate-click')
    }
    return (
        <> <Top></Top>
            <div className="about">
                <p>
                    this is the about page. this page will give you information about our organisation. we work with JOHN WICK to ensure your and your dogs safety.
                </p>
                
                {/* 
                <div className={clName} onClick={() => toggleClass()}>

                </div> 
                */}

                <div ref={clName} className="animate-div" onClick={() => toggleClass()}>

                </div>
            </div>
        </>
    )
}