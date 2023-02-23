# Ciclos de vida, componente Reactjs

https://giulianoconti.github.io/devlights-ciclo-de-vida/

## Cuando se ejecuta la app por primera vez:
Primero se ejecuta el console.log(render).\
Luego se montan todos los useEffect en el orden que estén.

## Al tocar el botón:
Se vuelve a ejecutar primero el console.log(render).\
Se desmontan y luego se montan el useEffect que no tiene dependencia y el que tiene como dependencia el 'name' que cambió al tocar el botón.\

## --------------------------
El que tiene como dependencia un array vacío se ejecuta una sola vez.



