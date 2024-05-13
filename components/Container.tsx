type ContainerProps = {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className='
      border-purple-600
        border-8
        my-16
        rounded-3xl
        shadow-[0px_0px_20px_10px_#8639c1]
        max-w-[1320px]
        container
        mx-[500px]
        px-[500px]
  '
    >
        {children}
    </div>
  )
}

export default Container
