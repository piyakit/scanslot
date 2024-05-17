import { cn } from '@/lib/utils'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('2xl:mx-[28rem] xs:mx-4', className)}>
      <div
        className={cn(
          'border-purple-600 border-8 rounded-3xl shadow-[inset_0px_0px_50px_30px_#8639c1] px-8 max-w-full z-[-5]'
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default Container
