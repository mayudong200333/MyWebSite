type ContainerProps = {
    children: React.ReactNode
}

const Container: React.FC <ContainerProps> = ({children}) =>{
    return <div className="container max-w-2xl m-auto px-4">{children}</div>
}

export default Container;
