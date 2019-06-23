<div style="text-align: center" > 

# **Sistema de gestión de  inventario para farmacias (SISFARMA)**

![logo](Logo/logo.jpg)


<div style="text-align: center" > 

# Diagrama de clases (SisFarma)
![logo](img/diagrama.jpg)

<div><p  style="text-align:justify">
El diagrama de clases presenta las siguientes características:
</P></div>
<div><p  style="text-align:justify">
1. CLASES: <br>
* Venta.<br>
* Cliente.<br>
* Género.<br>
* Empleado. <br>
* Tipo de identificación.<br>
* Usuario empleado.<br>
* Productos.<br>
* Tipo empleado.<br>
* Laboratorio.<br>
* Proveedor.<br>
* Marca. <br>
* Presentación.<br>
* Categoría. <br>
</P></div>
<div><p  style="text-align:justify">
2. RELACIONES: <br>
* ventas- cliente: uno/muchos a uno/muchos. <br>
* ventas- producto: uno/muchos a uno/muchos.<br>
* cliente- género: uno/muchos a uno.<br>
* género- empleado: uno a uno/muchos. <br>
* empleado- tipo identificación: uno/muchos a uno.<br>
* tipo identificación- cliente: uno a uno/muchos.<br>
* empleado- usuario empleado: uno/muchos a unos.<br>
* empleado- tipo empleado: uno/muchos a uno.<br>
* producto- laboratorio: uno/muchos a uno.<br>
* laboratorio-proveedor: uno a uno/muchos.<br>
* producto- marca: uno/muchos a uno.<br>
* producto- categoría: uno/muchos a uno.<br>
* producto- presentacíon: uno/muchos a uno.<br>
</P></div>
<div><p  style="text-align:justify">
3. COMPOSICIÓN: <br>
* ventas- cliente: agreación.<br>
* ventas- producto: asociación.<br>
* cliente- género: agreación.<br>
* género- empleado: agreación. <br>
* empleado- tipo identificación: agreación.<br>
* tipo identificación- cliente: agreación.<br>
* empleado- usuario empleado: asociación.<br>
* empleado- tipo empleado: agreación.<br>
* producto- laboratorio: agreación.<br>
* laboratorio-proveedor: agreación.<br>
* producto- marca: agreación.<br>
* producto- categoría: agreación.<br>
* producto- presentacíon: agreación.<br>
</p></div>
<div><p  style="text-align:justify">
4. CONECTORES: <br>
* ventas (REALIZA) cliente.<br>
* ventas (CONTIENE) producto.<br>
* cliente (PERTENECE) género.<br>
* género (PERTENECE) empleado. <br>
* empleado (TIENE) tipo identificación.<br>
* tipo identificación (TIENE) cliente.<br>
* empleado (SE REGISTRA) usuario empleado.<br>
* empleado (SE CLASIFICA) tipo empleado.<br>
* producto (ALMACENA) laboratorio.<br>
* laboratorio (SURTE) proveedor.<br>
* producto (PERTENECE) marca.<br>
* producto (HACE PARTE) categoría.<br>
* producto (TIENE) presentacíon.<br>
</p></div>
<div><p  style="text-align:justify">
4. DEPENDENCIAS: <br>
* cliente DEPENDE venta.<br>
* ventas DEPENDE producto.<br>
* género DEPENDE cliente.<br>
* género DEPENDE empleado. <br>
* tipo identificación DEPENDE empleado.<br>
* tipo identificación DEPENDE cliente.<br>
* usuario empleado DEPENDE empleado.<br>
* tipo empleado DEPENDE empleado.<br>
* producto DEPENDE laboratorio.<br>
* proveedor DEPENDE producto.<br>
* marca DEPENDE producto.<br>
* categoría DEPENDE producto.<br>
* presentacíon DEPENDE producto.<br>
</p></div>

</div>