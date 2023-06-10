import { Bee } from './components/bee/bee'
import './global.css'

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Library Icons</title>
      </head>
      <body>
        <Bee />
        <Bee icon="info-circle" customClass="color-red" />
        <Bee icon="triangle" />
        <Bee icon="heptagon-fill" customClass="color-red" />
        <Bee icon="banane" />
        <Bee icon="donut" customClass="color-red" />
      </body>
    </>
  )
}
