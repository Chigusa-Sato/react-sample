import React from 'react'
export class About extends React.Component{
  constructor(props){
    super(props)
    this.state={
      introduce:"こんにちは"
    }
  }
render(){
  const {params}=this.props.match
  return(
  <div>
    <h1>{this.state.introduce}</h1>
  <h2>About:{params.aboutId}</h2>
  </div>)
}
}

// const About=()=>{
//     return <h2>about.js dayooooooooooo</h2>
//   }



  export default About