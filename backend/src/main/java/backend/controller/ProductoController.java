
package backend.controller;

import backend.entity.Producto;
import backend.service.ProductoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    private final ProductoService productoService;

    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    // Listar todos los productos
    @GetMapping
    public List<Producto> listarProductos() {
        return productoService.listarProductos();
    }

    // Buscar producto por ID
    @GetMapping("/{id}")
    public ResponseEntity<Producto> buscarProducto(@PathVariable Integer id) {
        Producto producto = productoService.buscarProducto(id);

        if (producto == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(producto);
    }

    // Registrar producto
    @PostMapping
    public Producto guardarProducto(@RequestBody Producto producto) {
        return productoService.guardarProducto(producto);
    }

    // Actualizar producto
    @PutMapping("/{id}")
    public ResponseEntity<Producto> actualizarProducto(
            @PathVariable Integer id,
            @RequestBody Producto datos) {

        Producto producto = productoService.actualizarProducto(id, datos);

        if (producto == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(producto);
    }

    // Eliminar producto
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable Integer id) {

        boolean eliminado = productoService.eliminarProducto(id);

        if (!eliminado) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.noContent().build();
    }
}
