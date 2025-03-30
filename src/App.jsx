import { useState } from 'react'
import chef from './assets/chef-claude-icon.png'
import chefNew from './assets/chef-new.png'
import listNew from "./assets/listadd.png"
import Recipe from './components/Recipe.jsx'
import ListHandle from './components/ListHandle.jsx'
import { getRecipeFromMistral } from './ai.js'




function App() {

  const [lists , setLists] = useState([])
  const [recipe, setRecipe] = useState(false)
  const [loader, setLoader] = useState(false)

  

  function handleList(FormData){
    const list = FormData.get("addList")
    setLists(prevList =>
      [...prevList, list]
    )
  }

  function resetList(e){
    e.preventDefault()
    setLists([])
    setRecipe("")
  }

  async function toggleRecipe(){
    setLoader(true)
    const recipeMarkdown = await getRecipeFromMistral(lists)
    setRecipe(recipeMarkdown)
    setLoader(false)
  }


  
  return(
    <>
      <header>
        <img src={chef} />
        <h1>Recipe AI</h1>
      </header>
      
      <div className='form-list'>
        <form className='ip' action= {handleList}>
          <input className="ipList" type="text" name='addList'/>
          <button className='btn-list' ><img src={listNew} alt="add list" /> Add List</button>
          <button onClick={resetList} className='reset' > <img src={chefNew} alt="new recipe" /> New Recipe</button>
        </form>
      </div>

      {lists.length > 0 &&
        <ListHandle lists={lists} toggleRecipe={toggleRecipe} loader={loader}/>}

      {
      recipe &&
        <Recipe recipe = {recipe}/>
      }
    </>
  )
}

export default App
