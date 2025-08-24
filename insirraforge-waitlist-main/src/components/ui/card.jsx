import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const cardVariants = cva("w-full relative", {
  variants: {
    variant: {
      default: [
        "border rounded-lg",
        "border-zinc-200 dark:border-zinc-800",
        "bg-white dark:bg-zinc-950",
      ],
      dots: [
        "relative mx-auto w-full",
        "rounded-lg border border-dashed",
        "border-zinc-300 dark:border-zinc-800",
        "px-4 sm:px-6 md:px-8",
      ],
      gradient: ["relative mx-auto w-full", "px-4 sm:px-6 md:px-8"],
      plus: [
        "border border-dashed",
        "border-zinc-400 dark:border-zinc-700",
        "relative",
      ],
      neubrutalism: [
        "border-[0.5px]",
        "border-zinc-400 dark:border-white/70",
        "relative",
        "shadow-[4px_4px_0px_0px_rgba(0,0,0)]",
        "dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)]",
      ],
      inner: [
        "border-[0.5px] rounded-sm p-2",
        "border-zinc-300 dark:border-zinc-800",
      ],
      lifted: [
        "border rounded-xl",
        "border-zinc-400 dark:border-zinc-700",
        "relative",
        "shadow-[0px_5px_0px_0px_rgba(0,0,0,0.7)]",
        "dark:shadow-[0px_4px_0px_0px_rgba(255,255,255,0.5)]",
        "bg-zinc-50 dark:bg-zinc-900/50",
      ],
      corners: [
        "border-2 rounded-md",
        "border-zinc-100 dark:border-zinc-700",
        "relative",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const CardContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6", className)} {...props}>
      {props.children}
    </div>
  )
)
CardContent.displayName = "CardContent"

const Card = React.forwardRef(
  ({ className, variant, title, description, children, ...props }, ref) => {
    const DotsPattern = () => {
      const sharedClasses =
        "rounded-full outline outline-8 dark:outline-gray-950 sm:my-6 md:my-8 size-1 my-4 outline-gray-50 bg-green-400"

      return (
        <>
          <div className="absolute left-0 top-4 -z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:top-6 md:top-8" />
          <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:bottom-6 md:bottom-8" />

          <div className="relative w-full border-x border-zinc-400 dark:border-zinc-700">
            <div className="absolute z-0 grid h-full w-full items-center">
              <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
                <div className={`${sharedClasses} -translate-x-[2.5px]`} />
                <div
                  className={`${sharedClasses} translate-x-[2.5px] place-self-end`}
                />
                <div className={`${sharedClasses} -translate-x-[2.5px]`} />
                <div
                  className={`${sharedClasses} translate-x-[2.5px] place-self-end`}
                />
              </section>
            </div>

            <div className="relative z-20 mx-auto py-8">
              <CardContent>
                {title && (
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {title}
                  </h3>
                )}
                {description && (
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    {description}
                  </p>
                )}
                {children}
              </CardContent>
            </div>
          </div>
        </>
      )
    }

    const PlusPattern = () => (
      <>
        <div className="absolute left-0 top-4 -z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:top-6 md:top-8" />
        <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:bottom-6 md:bottom-8" />

        <div className="relative w-full border-x border-zinc-400 dark:border-zinc-700">
          <div className="absolute z-0 grid h-full w-full items-center">
            <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
              <div className="h-4 w-4 rounded-full bg-zinc-400 dark:bg-zinc-700" />
              <div className="h-4 w-4 rounded-full bg-zinc-400 dark:bg-zinc-700 place-self-end" />
              <div className="h-4 w-4 rounded-full bg-zinc-400 dark:bg-zinc-700" />
              <div className="h-4 w-4 rounded-full bg-zinc-400 dark:bg-zinc-700 place-self-end" />
            </section>
          </div>

          <div className="relative z-20 mx-auto py-8">
            <CardContent>
              {title && (
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {title}
                </h3>
              )}
              {description && (
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  {description}
                </p>
              )}
              {children}
            </CardContent>
          </div>
        </div>
      </>
    )

    const GradientPattern = () => (
      <>
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200 dark:from-zinc-900 dark:via-zinc-100 dark:to-zinc-200" />

        <div className="relative z-20 mx-auto py-8">
          <CardContent>
            {title && (
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
            )}
            {children}
          </CardContent>
        </div>
      </>
    )

    const NeubrutalismPattern = () => (
      <>
        <div className="absolute inset-0 -z-10 bg-zinc-50 dark:bg-zinc-900" />
        <div className="absolute inset-0 -z-10 bg-zinc-50 dark:bg-zinc-900" />

        <div className="relative z-20 mx-auto py-8">
          <CardContent>
            {title && (
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
            )}
            {children}
          </CardContent>
        </div>
      </>
    )

    const InnerPattern = () => (
      <>
        <div className="absolute inset-0 -z-10 bg-zinc-50 dark:bg-zinc-900" />
        <div className="absolute inset-0 -z-10 bg-zinc-50 dark:bg-zinc-900" />

        <div className="relative z-20 mx-auto py-8">
          <CardContent>
            {title && (
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
            )}
            {children}
          </CardContent>
        </div>
      </>
    )

    const LiftedPattern = () => (
      <>
        <div className="absolute inset-0 -z-10 bg-zinc-50 dark:bg-zinc-900" />
        <div className="absolute inset-0 -z-10 bg-zinc-50 dark:bg-zinc-900" />

        <div className="relative z-20 mx-auto py-8">
          <CardContent>
            {title && (
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
            )}
            {children}
          </CardContent>
        </div>
      </>
    )

    const CornersPattern = () => (
      <>
        <div className="absolute inset-0 -z-10 bg-zinc-50 dark:bg-zinc-900" />
        <div className="absolute inset-0 -z-10 bg-zinc-50 dark:bg-zinc-900" />

        <div className="relative z-20 mx-auto py-8">
          <CardContent>
            {title && (
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
            )}
            {children}
          </CardContent>
        </div>
      </>
    )

    const DefaultPattern = () => (
      <CardContent>
        {title && (
          <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {title}
          </h3>
        )}
        {description && (
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        )}
        {children}
      </CardContent>
    )

    const patterns = {
      default: DefaultPattern,
      dots: DotsPattern,
      gradient: GradientPattern,
      plus: PlusPattern,
      neubrutalism: NeubrutalismPattern,
      inner: InnerPattern,
      lifted: LiftedPattern,
      corners: CornersPattern,
    }

    const PatternComponent = patterns[variant] || DefaultPattern

    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        {...props}
      >
        <PatternComponent />
      </div>
    )
  }
)
Card.displayName = "Card"

export { Card }
export { CardContent }
export { cardVariants }
