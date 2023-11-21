package me.r3tnu.lab2web.util;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public class HttpUtils {
    public static void forward(HttpServletRequest req, HttpServletResponse resp, int code, String message) throws ServletException, IOException {
        resp.setStatus(code);
        req.setAttribute("error", message);
        req.getServletContext().getRequestDispatcher("/error.jsp").forward(req, resp);
    }
}
