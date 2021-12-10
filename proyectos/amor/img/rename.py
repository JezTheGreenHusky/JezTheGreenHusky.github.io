import os

lista = []

for file in os.listdir('E:\Multimedia\Documentos\Habitos\Computacion\Programacion\Practicando lo aprendido\Desarrollo web\amor\img'):
	if file.endswith('webp'):
		lista.append(file)

print(lista)

