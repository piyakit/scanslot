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
        shadow-[inset_0px_0px_20px_10px_#8639c1]
        xs:mx-[-10px]
        xs:mt-4
        z-10
  '
    >
        {children}
    </div>
  )
}

export default Container
