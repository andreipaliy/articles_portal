import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames'
import { Button } from 'shared/ui/Button'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

interface CounterProps {
  className?: string;
}

export const Counter = ({ className }: CounterProps) => {
    const dispatch = useDispatch()

    const counterValue = useSelector(getCounterValue)

    const increment = () => dispatch(counterActions.increment())
    const decrement = () => dispatch(counterActions.decrement())

    return (
        <div className={classNames('', {}, [className])}>
            <h1 data-testid='value'>
                {counterValue}
            </h1>
            <Button onClick={increment} data-testid='increment'>+</Button>
            <Button onClick={decrement} data-testid='decrement'>-</Button>
        </div>
    )
}
