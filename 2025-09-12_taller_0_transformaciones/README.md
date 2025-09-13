# Jupyter Notebook (Python)

Se implemento la animacion de un  **triángulo** aplicando transformaciones geométricas con matrices:

- **Traslación**: el triángulo se desplaza siguiendo una trayectoria circular.  
- **Rotación**: el triángulo gira alrededor de su propio centro.  
- **Escalado**: el tamaño cambia de forma oscilante usando una función sinusoidal.  

Se usaron las librerías **NumPy**, **Matplotlib** e **ImageIO** para manejar las matrices, graficar los frames y exportar la animación en formato **GIF**.  

### Código 
Con este codigo se construye una matriz compuesta de transformación (traslación + rotación + escala) y se aplica al triángulo y asi se puede calcular su nueva posición y forma en cada frame de lo que sera el GIF.
```python
T = traslation(tx, ty) @ rotation(angle) @ scale(scaleT, scaleT)
transformed = T @ triangle
```
![Animación python](/2025-09-12_taller_0_transformaciones/python/triangulo.gif)

# Three.js 

En este apartado se implementó una animación 3D usando **React**.  

Se creó un  **donut** y se aplicaron las siguientes transformaciones:  

- **Rotación**: el donut gira  sobre los ejes X y Y.  
- **Luces**: se añadió iluminación ambiental y direccional para dar volumen al objeto.  
- **Interactividad**: se incluyeron controles de cámara OrbitControls.  

![Animación threejs](/2025-09-12_taller_0_transformaciones/threejs/donut.gif)

# Processing

Este sketch genera un GIF animado de una elipse en 2D.  

- **translate()**: centra la figura en la pantalla.  
- **rotate()**: aplica una rotación continua basada en `frameCount`.  
- **scale()**: genera un efecto de  al cambiar el tamaño con una función seno.  
- **pushMatrix()/popMatrix()**: aíslan las transformaciones para que solo afecten a la elipse.  

### Codigo

```java
pushMatrix();                     // Guardar estado actual
translate(width/2, height/2);     // Mover al centro
float angle = radians(frameCount % 360);
rotate(angle);                    // Rotación continua
float s = 1.0 + 0.5 * sin(radians(frameCount));
scale(s);                         // Escalado oscilante
ellipse(0, 0, 200, 120);          // Dibujo de la elipse
popMatrix();                      // Restaurar estado
```
![Animación processing](/2025-09-12_taller_0_transformaciones/processing/elipse.gif)
