import { createRoot } from 'react-dom/client'
import './index.css'

import Header from "./base/header/header"
import Main from "./base/main/main"

import links from "./data/links"
import { posts } from "./data/posts"

createRoot(document.getElementById('root')!).render(
    <>
        <Header title="Добрый" links={links} />

        <Main posts={posts} />
    </>
)
