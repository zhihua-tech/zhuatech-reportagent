/* Copyright 2026 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ */
package cn.zhuatech.reportagent.service;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import org.springframework.stereotype.Service;

import java.util.List;

/** 经营报告发布门禁：过期指标、敏感财务信息和未确认结论禁止发布。 */
@Service
public class ReportReleaseGuardService {
    public record ReleaseRequest(
            @NotBlank String reportName,
            @Min(1) @Max(1000) int metricCount,
            @Min(0) @Max(1000) int staleMetricCount,
            boolean containsSensitiveFinance,
            boolean metricOwnerApproved) {}

    public record ReleaseDecision(
            boolean publishAllowed,
            String route,
            int freshness,
            List<String> controls) {}

    public ReleaseDecision inspect(ReleaseRequest request) {
        int freshness = Math.max(0,
                100 - request.staleMetricCount() * 100 / request.metricCount());
        boolean review = request.staleMetricCount() > 0 || request.containsSensitiveFinance();
        boolean allowed = !review || request.metricOwnerApproved();
        String route = request.staleMetricCount() > 0 ? "REFRESH_REQUIRED"
                : request.containsSensitiveFinance() ? "OWNER_APPROVAL" : "READY_TO_PUBLISH";
        return new ReleaseDecision(allowed, route, freshness, List.of(
                "展示指标定义、负责人和刷新时间",
                "财务敏感字段按角色脱敏",
                "发布版本保留数据快照与审批记录"));
    }
}
