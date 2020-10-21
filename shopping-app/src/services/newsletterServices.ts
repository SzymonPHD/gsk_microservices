import path from "path"

const newsletter1 = {
	title : 'MyFirstNews',
	author : "SzymonP",
	date : 'Today'
  }
  
const newsletter2 = {
	title : 'MySecondNews',
	author : "Someone",
	date : 'Not_Yesterday'
  }

let newsletters = [newsletter1, newsletter2]


export const getAllNewsletters = () => {
  
  return newsletters
}

export const getNewsByTitle = (title) => {

	return newsletters.filter(obj => {
		return obj.title === title
	})
}
