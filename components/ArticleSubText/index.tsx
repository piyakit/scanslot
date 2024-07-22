import { cn } from '@/lib/utils'

type ArticleSubTextProps = {
  children: string
  className?: string
}
const ArticleSubText: React.FC<ArticleSubTextProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('text-white', className)}>
      <span>{children}</span>
    </div>
  )
}

export default ArticleSubText
