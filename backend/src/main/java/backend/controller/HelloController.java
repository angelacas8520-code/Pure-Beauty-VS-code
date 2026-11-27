
package backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/api/saludo")
    public String saludo() {
        return "¡Bienvenido a la API REST de Pure Beauty!";
    }
}