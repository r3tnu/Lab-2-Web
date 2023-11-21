package me.r3tnu.lab2web.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import me.r3tnu.lab2web.util.HttpUtils;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Arrays;

public class ResourcesServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String[] res = req.getRequestURI().split("/resources");
        getServletContext().log(Arrays.toString(res));
        if (res.length < 2) {
            HttpUtils.forward(req, resp, 404, "Resource not found");
            return;
        }

        String resource = res[res.length - 1];
        if (resource.endsWith(".css")) {
            resp.setContentType("text/css");
        } else if (resource.endsWith(".js")) {
            resp.setContentType("text/javascript");
        }

        try (var asset = getClass().getClassLoader().getResourceAsStream(resource)) {
            if (asset != null) {
                asset.transferTo(resp.getOutputStream());
            } else {
                HttpUtils.forward(req, resp, 404, "Resource not found");
            }
        }
    }
}
