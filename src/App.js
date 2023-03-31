import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import News from './Components/News';


import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  pageSize = 6;
  apikey= process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}

          />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apikey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
            <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apikey} key="business" pageSize={this.pageSize} country="in" category="business" />}></Route>
            <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apikey} key="health" pageSize={this.pageSize} country="in" category="health" />}></Route>
            <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apikey} key="sports" pageSize={this.pageSize} country="in" category="sports" />}></Route>
            <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apikey} key="technology" pageSize={this.pageSize} country="in" category="technology" />}></Route>
            <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apikey} key="science" pageSize={this.pageSize} country="in" category="science" />}></Route>


          </Routes>
        </BrowserRouter>

      </div>
    )
  }
}



