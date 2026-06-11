import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'
import { cn } from '@/app/lib/utils'

export const Accordion = AccordionPrimitive.Root

export function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item className={cn('border-b border-nude', className)} {...props} />
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          'group flex flex-1 items-center justify-between gap-4 py-6 text-left font-display text-xl tracking-tight text-ink transition-colors outline-none hover:text-burgundy focus-visible:text-burgundy data-[state=open]:text-burgundy md:text-2xl',
          className,
        )}
        {...props}
      >
        {children}
        {/* Plus rotates into an × on open — sharp, no chevron cliché */}
        <Plus
          className="size-5 shrink-0 text-burgundy transition-transform duration-300 ease-out group-data-[state=open]:rotate-45"
          strokeWidth={1.5}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden data-[state=closed]:animate-[accordion-up_0.3s_ease-out] data-[state=open]:animate-[accordion-down_0.3s_ease-out]"
      {...props}
    >
      <div className={cn('max-w-2xl pb-6 text-body-l leading-relaxed text-ink/70', className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}
