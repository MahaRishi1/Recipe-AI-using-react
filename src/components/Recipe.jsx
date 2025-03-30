import ReactMarkdown from 'react-markdown'
export default function Recipe(props){

    
    return(
        
        <>
            {props.recipe &&
                <section className='suggested-recipe-container'>
                <ReactMarkdown>{props.recipe}</ReactMarkdown>   
            </section>
            }
        </>
    )
}




















// import { useEffect, useRef } from "react";
// import ReactMarkdown from "react-markdown";

// export default function Recipe(props) {
//   const recipeRef = useRef(null);

//   useEffect(() => {
//     if (props.recipe && recipeRef.current) {
//       recipeRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [props.recipe]);

//   return (
//     <>
//       {props.recipe && (
//         <section id="new-section" className="suggested-recipe-container" ref={recipeRef}>
//           <ReactMarkdown>{props.recipe}</ReactMarkdown>
//         </section>
//       )}
//     </>
//   );
// }
