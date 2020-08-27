import React,{useState,useEffect} from 'react'
import styles from './Display.module.css';
import FileViewer from 'react-file-viewer';
export default function Display({posts}) {
    const [info,setInfo] = useState({});
    const [open,setOpen] = useState(false);
    
    return (
        <div className={styles.top}>
            <div className={styles.container}>
                {posts.map((poem,k) => (
                    <div key={k} className={styles.card}>
                    <img className={styles.image} src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="couldn't load the image"/>
                    <div className={styles.body}>
                        <div className={styles.title}>Deborah Mendes</div>
                        <div className={styles.subtitle}>Music a form of art</div>
                        <button className={styles.btn} onClick={() => (setOpen(true), setInfo(poem))}>View</button>
                    </div>
                    </div>
                ))}
            </div>
            {open &&(
                <div className={styles.file}>
                    <div className={styles.close}>
                        <button onClick={() =>setOpen(false)}>X</button>
                    </div>
                    <FileViewer
                    fileType={'docx'}
                    filePath={info.content}
                    className="img-fluid"
                    /> 
                </div>
                
            )}
        </div>
    )
}