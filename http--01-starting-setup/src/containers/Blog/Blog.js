import React, { Component } from 'react';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: 0,
        error: false
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
                this.setState({
                    error: true
                })
            });
    }

    postSelectedHandler = (id) => {
        this.setState({
            selectedPostId: id
        });
    }

    render () {
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
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    { posts }
                </section>
                
            </div>
        );
    }
}

export default Blog;