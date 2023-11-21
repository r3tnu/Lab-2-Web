<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<div class="form-container">
    <form action="${pageContext.request.contextPath}/controller" method="get" id="request-form">

        <!-- Form input -->
        <b>Point:</b>

        <br>

        <!-- X input -->
        <label for="x">
            X:
            <select name="x" id="X" class="x-input">
                <option value="-5">-5</option>
                <option value="-4">-4</option>
                <option value="-3">-3</option>
                <option value="-2">-2</option>
                <option value="-1">-1</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </label>

        <br>


        <!-- Y input -->
        <label for="y">
            Y [-5, 5]: <br>
            <input type="text" value="0" name="y" id="Y" class="y-input">
        </label>

        <br>

        <!-- Radius input -->
        <b>Radius:</b>

        <br>

        <p>R:</p> <br>

        <label for="r-1">
            <span>1</span>
            <input type="radio" class="r-input" name="r" id="r-1" value="1">
        </label>

        <label for="r-2">
            <span>1.5</span>
            <input type="radio" class="r-input" name="r" id="r-2" value="1.5">
        </label>

        <label for="r-3">
            <span>2</span>
            <input type="radio" class="r-input" name="r" id="r-3" value="2">
        </label>

        <label for="r-4">
            <span>2.5</span>
            <input type="radio" class="r-input" name="r" id="r-4" value="2.5">
        </label>

        <label for="r-5">
            <span>3</span>
            <input type="radio" class="r-input" name="r" id="r-5" value="3">
        </label>

        <br>

        <div class="error-container"></div>

        <!-- Submit -->
        <input type="submit" class="button" id="submit">
    </form>
</div>