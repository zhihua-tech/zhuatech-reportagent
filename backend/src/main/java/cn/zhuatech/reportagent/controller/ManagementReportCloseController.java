/* Copyright 2026 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ */
package cn.zhuatech.reportagent.controller;

import cn.zhuatech.reportagent.common.ApiResponse;
import cn.zhuatech.reportagent.service.ManagementReportCloseService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/enterprise/reports")
public class ManagementReportCloseController {
    private final ManagementReportCloseService service;

    public ManagementReportCloseController(ManagementReportCloseService service) {
        this.service = service;
    }

    @PostMapping("/close-governance")
    public ApiResponse<ManagementReportCloseService.CloseAssessment> assess(
            @Valid @RequestBody ManagementReportCloseService.CloseRequest request) {
        return ApiResponse.ok("经营报告关账校验完成", service.assess(request));
    }
}
