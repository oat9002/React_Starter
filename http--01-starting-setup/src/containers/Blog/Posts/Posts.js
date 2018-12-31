import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';

import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
    }

    postSelectedHandler = (id) => {
        this.setState({
            selectedPostId: id
        });
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({
                    posts: updatedPosts
                });

                // console.log(response);
            })
            .catch(error => {
                // this.setState({
                //     error: true
                // })
            });
    }

    render() {
        const posts = !this.state.error ? 
                this.state.posts.map(post => {
                    return <Post 
                            key={ post.id } 
                            title={ post.title } 
                            uthor={ post.author } 
                            clicked={ () => this.postSelectedHandler(post.id) } /> 
                }) : 
                <p style={{ textAlign: 'center' }}>Something went wrong</p>

        return (
            <section className="Posts">
                { posts }
            </section>
        );
    }
}

export default Posts;