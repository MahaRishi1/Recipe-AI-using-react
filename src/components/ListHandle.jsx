
export default function ListHandle(props){
    const listing = props.lists.map(listItem =>{
        return (
          <li>{listItem}</li>
        )
      })

    return(
        <>
            {props.lists.length !== 0 &&
                <>
                <h6>Ingredients on hand</h6>
                <section className='listing'>
                    <ul className="fromList">{listing}</ul>
                </section>
                </>
            }

            {props.lists.length > 3 &&
                <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.toggleRecipe}>
                    {props.loader ? (<span className="preloader-btn"></span>)
                    :("Generate Recipe")
                    }
                </button>
                </div>
            }


        </>
    )
}