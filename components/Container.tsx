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
          'border-yellow-500 border-8 rounded-3xl shadow-[inset_0px_0px_20px_20px_#faf089] px-8 max-w-full z-[-5]'
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default Container
