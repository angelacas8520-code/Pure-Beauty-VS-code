
package backend.service;

import backend.entity.Producto;
import backend.repository.ProductoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoService {

    private final ProductoRepository productoRepository;

    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    public List<Producto> listarProductos() {
        return productoRepository.findAll();
    }

    public Producto buscarProducto(Integer id) {
        return productoRepository.findById(id).orElse(null);
    }

    public Producto guardarProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    public Producto actualizarProducto(Integer id, Producto datos) {
        Producto producto = buscarProducto(id);

        if (producto == null) {
            return null;
        }

        producto.setNombre(datos.getNombre());
        producto.setPrecio(datos.getPrecio());
        producto.setCantidad(datos.getCantidad());
        producto.setIdCategoria(datos.getIdCategoria());

        return productoRepository.save(producto);
    }

    public boolean eliminarProducto(Integer id) {
        if (!productoRepository.existsById(id)) {
            return false;
        }

        productoRepository.deleteById(id);
        return true;
    }
}
