import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux'; // connect is a function that we invoke from higher order component

class Home extends Component {
    // deleted, because we no longer use axios, but redux now in this project
    // state = {
    //     posts: []
    // }
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             console.log(res);
    //             this.setState({
    //                 posts: res.data.slice(0, 10)
    //             })
    //         }) // inside then method we pass the callback function which takes response object from external source as a parameter
    // }
    render() {
        console.log(this.props);
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A pokeball"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        );
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    } // we apply state to property called 'posts' and we're gonna map that to the props
}

export default connect(mapStateToProps)(Home);