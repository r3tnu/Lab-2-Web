package me.r3tnu.lab2web.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import me.r3tnu.lab2web.PointWrapper;
import me.r3tnu.lab2web.pointChecker.PointChecker;
import me.r3tnu.lab2web.pointChecker.PointCheckerImp;
import me.r3tnu.lab2web.pointValidator.PointValidator;
import me.r3tnu.lab2web.pointValidator.PointValidatorImp;
import me.r3tnu.lab2web.util.HttpUtils;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class AreaCheckServlet extends HttpServlet {

    PointValidator pointValidator;
    PointChecker pointChecker;

    public AreaCheckServlet(PointValidator v, PointChecker c) {
        this.pointValidator = v;
        this.pointChecker = c;
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();

        Integer x;
        try {
            x = Integer.parseInt(req.getParameter("x"));
        } catch (NumberFormatException e) {
            HttpUtils.forward(req, resp, 400, "Parameter X is of an incorrect type");
            return;
        }

        Float y;
        try {
            y = Float.parseFloat(req.getParameter("y"));
        } catch (NumberFormatException e) {
            HttpUtils.forward(req, resp, 400, "Parameter Y is of an incorrect type");
            return;
        }

        Float r;
        try {
            r = Float.parseFloat(req.getParameter("r"));
        } catch (NumberFormatException e) {
            HttpUtils.forward(req, resp, 400, "Parameter R is of an incorrect type");
            return;
        }

        PointWrapper point = new PointWrapper();
        point.setX(x);
        point.setY(y);
        point.setR(r);

        if (!pointValidator.valid(point)) {
            HttpUtils.forward(req, resp, 400, "Point parameters invalid");
            return;
        }

        point.setResult(pointChecker.check(point));
        req.setAttribute("result", point);

        req.setAttribute("endTime", LocalDateTime.now());

        System.out.println((req.getAttribute("startTime").toString()));
        getServletContext().getRequestDispatcher("/results.jsp").forward(req, resp);
    }
}
