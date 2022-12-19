import './TakeSurvey.css'
import React, {useState} from 'react';


const TakeSurvey = (props) => {
    const [surveyModal, setSurveyModal] = useState(false)
    const [resultModal, setResultModal] = useState(false)
    const [lowWeights, setLowWeights] = useState('')
    const [highWeights, setHighWeights] = useState('')
    const [age, setAge] = useState('')
    const [teethInput, setTeethInput] = useState('')
    const [result, setResult] = useState('')
    
    let smallDog = 'We Recommend The Small Dog Package!!'
    let mediumDog = 'We Recommend The Medium Dog Package!!'
    let largeDog = 'We Recommend The Large Dog Package!!'
    let incompleteSurvey = 'PLEASE TAKE SURVEY FIRST'

    const toggleModal = () => {
        setSurveyModal(!surveyModal)
        setLowWeights('')
        setHighWeights('')
        setAge('')
        setTeethInput('')
        setResult(incompleteSurvey)
    }

    const toggleResultModal = () => {
        setResultModal(!resultModal)
        setSurveyModal(false)
    }

    if(surveyModal) {
        document.body.classList.add('active-modal')
    }else {
        document.body.classList.remove('active-modal')
    }

    let surveyResult = () => {
        if (lowWeights === 'Yes' && highWeights === 'Yes' && age === 'Yes' && teethInput === 'No'){
            console.log('We Recommend The Large Dog Package!!')
            setResult(largeDog)
        }
        if (lowWeights === 'No' && highWeights === 'No' && age === 'Yes' && teethInput === 'No'){
            console.log('We Recommend The Small Dog Package!!')
            setResult(smallDog)
        }
        if (lowWeights === 'No' && highWeights === 'No' && age === 'No' && teethInput === 'No'){
            console.log('We Recommend The Small Dog Package!!')
            setResult(smallDog)
        }
        if (lowWeights === 'No' && highWeights === 'No' && age === 'No' && teethInput === 'Yes'){
            console.log('We Recommend The Small Dog Package!!')
            setResult(smallDog)
        }
        if (lowWeights === 'Yes' && highWeights === 'No' && age === 'Yes' && teethInput === 'No'){
            console.log('We Recommend The Medium Dog Package!!')
            setResult(mediumDog)
        }
        if (lowWeights === 'Yes' && highWeights === 'No' && age === 'Yes' && teethInput === 'Yes'){
            console.log('We Recommend The Small Dog Package!!')
            setResult(smallDog)
        }
        if (lowWeights === 'Yes' && highWeights === 'No' && age === 'No' && teethInput === 'Yes'){
            console.log('We Recommend The Small Dog Package!!')
            setResult(smallDog)
        }
        if (lowWeights === 'Yes' && highWeights === 'Yes' && age === 'No' && teethInput === 'No'){
            console.log('We Recommend The Large Dog Package!!')
            setResult(largeDog)
        }
        if (lowWeights === 'Yes' && highWeights === 'Yes' && age === 'Yes' && teethInput === 'Yes'){
            console.log('We Recommend The Medium Dog Package!!')
            setResult(mediumDog)
        }
        if (lowWeights === 'Yes' && highWeights === 'No' && age === 'No' && teethInput === 'No'){
            console.log('We Recommend The Medium Dog Package!!')
            setResult(mediumDog)
        }
        if (lowWeights === 'Yes' && highWeights === 'Yes' && age === 'No' && teethInput === 'Yes'){
            console.log('We Recommend The Large Dog Package!!')
            setResult(largeDog)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        surveyResult()
    }

    return ( 
        <div>
            <div className="survey">
                <h2>Take survey to determine the best choice for you!!</h2>
                <h2>Take survey to determine the best choice for you!!</h2>
                <h4 onClick={toggleModal} className='open'>TAKE SURVEY</h4>
                <button onClick={toggleModal} className="SurveyButton">Take Survey</button>
            </div>

            {surveyModal && (
                <div className='Modal'>
                    <div className='survey-overlay'></div>
                    <div className='content'>
                        <h3> Answer Each Question </h3>
                        <br />
                        <br />
                        <label> Does Your Dog Weigh Over 20 Pounds: <input placeholder='ex: Yes/No' value={lowWeights} onChange={(event) => setLowWeights(event.target.value)} /></label>
                        <br />
                        <br />
                        <label> Does Your Dog Weigh Over 70 Pounds: <input placeholder='ex: Yes/No' value={highWeights} onChange={(event) => setHighWeights(event.target.value)} /></label>
                        <br />
                        <br />
                        <label> Is Your Dog Under A Year And A Half: <input placeholder='ex: Yes/No' value={age} onChange={(event) => setAge(event.target.value)} /></label>
                        <br />
                        <br />
                        <label> Does Your Dog Have Any Missing Teeth: <input placeholder='ex: Yes/No' value={teethInput} onChange={(event) => setTeethInput(event.target.value)} /> </label>
                        <br />
                        <br />
                        <button className='submit-btn' type='submit' onClick={handleSubmit} >SUBMIT</button>
                        <button className='modal-result' onClick={toggleResultModal}>RESULT</button>
                        <p className='close-modal' onClick={toggleModal}>X</p>
                    </div>
                </div>)}

            {resultModal && (
                <div className='result-modal'>
                    <div className='result-overlay'></div>
                    <div className='result-content'>
                        <h1 className='line-up'>{result}</h1>
                        <p className='close-modal' onClick={toggleResultModal}>X</p>
                    </div>
                </div>)}
        </div>
     );
}
 
export default TakeSurvey;