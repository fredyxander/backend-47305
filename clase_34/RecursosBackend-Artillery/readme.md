RECUERDA COLOCAR TU URL DE MONGO ATLAS ANTES DE EJECUTAR ESTE PROYECTO

El comando a ejecutar en consola será:

artillery run config.yml --output testPerformance.json

Además, para poder ver el resultado en una gráfica, ejecutar el siguiente comando:

Éste leerá el archivo config.yml y realizará el testing correspondiente a los escenarios.

artillery report testPerformance.json -o testResults.html

Éste tomará el json correspondiente y procederá a generar un html para leer las estadísticas de manera más amigable.

El proyecto cuenta con artillery -D, además. para poder ejecutar el testing por endpoint, se utiliza el plugin:

artillery-plugin-metrics-by-endpoint

(Revisar package.json para ver lo que se está utilizando).

Se te recomienda realizar un test por tu parte antes de la clase para revisar el flujo de este proyecto.

El proyecto ha sido previamente testeado y garantiza su funcionamiento.

Profesor: Puedes realizar la lectura de este proyecto como "Ejemplo de un testing real" o armarlo durante clase según el
tiempo con el que cuentes.