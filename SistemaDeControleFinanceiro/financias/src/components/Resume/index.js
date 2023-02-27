import React from 'react';
import ResumeItem from '../ResumeItem';
import * as C from './styles';


const Resume = ({income,expense,total}) =>{
    return (
    <>
     <C.Container>
        <ResumeItem title="Entradas"   value={income}/>
        <ResumeItem title="Saidas" value={expense}/>
        <ResumeItem title="Total"  value={total} />
     </C.Container>
    </>

    )
}
export default Resume;