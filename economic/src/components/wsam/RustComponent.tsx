import dynamic from 'next/dynamic'

interface RustComponentProps {
  numberOne: number,
  numberTwo: number
}

const RustComponent = dynamic({
  loader: async () => {
    // Import the wasm module
    // @ts-ignore
    const exports = (await import('~/addons/numbers/pkg/numbers_bg.wasm')) as AddModuleExports
    const { add: add, greet: greet } = exports

    // Return a React component that calls the add_one method on the wasm module
    return ({ numberOne, numberTwo }: RustComponentProps) => (
      <div>
        <>{add(numberOne, numberTwo)}</>
      </div>
    )
  },
})

export default RustComponent