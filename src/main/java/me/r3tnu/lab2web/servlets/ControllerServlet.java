package me.r3tnu.lab2web.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import me.r3tnu.lab2web.PointWrapper;
import me.r3tnu.lab2web.util.HttpUtils;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;

public class ControllerServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setAttribute("startTime", LocalDateTime.now());
        if (req.getParameter("x") == null || req.getParameter("y") == null ||
                req.getParameter("r") == null) {
            HttpUtils.forward(req, resp, 400, "Not all parameters are present");
        } else {
            getServletContext().getRequestDispatcher("/check").forward(req, resp);
        }
    }
}
